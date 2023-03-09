import Layout from "../components/layout";
import { api } from "../utils/api";

const JudgesPanel = () => {

    // get all the event submissions from each user
    const { data: submissions } = api.submissions.getSubmissions.useQuery();

    return (
      <Layout>
          <div className="flex justify-center ">
              <div className="flex flex-col">

              {submissions?.map((submission) => (
                // display the submission details
                <div className="mt-4" key={submission.userId}>
                    <h1>{submission.userName}</h1>
                    <p>{submission.fileName}</p>
                    <a href={submission.fileUrl}>{submission.fileUrl}</a>
                </div>
              ))}
              </div>
          </div>
      </Layout>
    );
};

export default JudgesPanel;