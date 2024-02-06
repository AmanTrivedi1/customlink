import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Chart from "@/components/Chart";
import SectionBox from "@/components/layout/SectionBox";
import { Event } from "@/models/Event";
import { Page } from "@/models/Page";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { differenceInDays, formatISO9075, isToday } from "date-fns";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

export default async function AnalyticsPage() {
  mongoose.connect(process.env.MONGO_URI);
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect('/');
  }
  const page = await Page.findOne({ owner: session.user.email });

  const groupedViews = await Event.aggregate([
    {
      $match: {
        type: 'view',
        uri: page.uri,
      }
    },
    {
      $group: {
        _id: {
          $dateToString: {
            date: "$createdAt",
            format: "%Y-%m-%d"
          },
        },
        count: {
          "$count": {},
        }
      },
    },
    {
      $sort: { _id: 1 }
    }
  ]);

  const clicks = await Event.find({
    page: page.uri,
    type: 'click',
  });

  return (
    <div  className=" md:block hidden   ">
      <div className=" border-bg-dark/30  p-2 border-2 rounded-lg" >
        <h2 className="text-xl mb-6 text-center text-bg-dark font-semibold ">Click Graph</h2>
        <Chart data={groupedViews.map(o => ({
          'date': o._id,
          'views': o.count,
        }))} />
      </div>
      <div className="border-2 rounded-lg mt-8 p-2 border-bg-dark/40">
        <h2 className="text-xl mb-6 mt-8 text-center text-bg-dark font-semibold">AnalyticsData</h2>
        {page.links.map(link => (
          <div key={link.title} className="md:flex gap-4 items-center border-t border-gray-200 py-4">
            <div className="text-blue-500 pl-4">
              <FontAwesomeIcon icon={faLink} />
            </div>
            <div className="grow">
              <div className="max-w-xs truncate">
                 <h3 className="font-semibold">{link.title || 'no title'}</h3>
              </div>
            <div className="max-w-xs truncate">
                <p className="text-gray-700 text-sm">{link.subtitle || 'no description'}</p>
            </div>
              <div className="max-w-xs truncate">
                <a className="text-xs w-20 text-blue-400" target="_blank" href={link.url}>{link.url}</a>
              </div>
            </div>
            <div className="text-center">
              <div className="border border-bg-dark/30 rounded-md p-2 mt-1 md:mt-0">
                <div className="text-3xl text-bg-dark">
                  {
                    clicks
                      .filter(
                        c => c.uri === link.url
                          && isToday(c.createdAt)
                      )
                      .length
                  }
                </div>
                <div className="text-bg-dark text-xs uppercase font-bold">clicks today</div>
              </div>
            </div>
            <div className="text-center ">
              <div className="border border-bg-dark/30 rounded-md p-2 mt-1 md:mt-0">
                <div className="text-3xl text-bg-dark">
                  {clicks.filter(c => c.uri === link.url).length}
                </div>
                <div className="text-bg-dark text-xs uppercase font-bold">clicks total</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
