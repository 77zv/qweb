import Layout from "../components/layout";
import { api } from "../utils/api";

const JudgesPanel = () => {

    // get all the event submissions from each user
    const { data: submissions } = api.submissions.getSubmissions.useQuery();

    return (
      <Layout>
          <div>
              {/* loop through all the submissions */}
              {submissions?.map((submission) => (
                <div key={submission.id}>
                    <h1>{submission.userId}</h1>
                    <p>{submission.fileName}</p>
                    <a href={submission.fileUrl}>{submission.fileUrl}</a>
                </div>
              ))}
          </div>
      </Layout>
    );
};

export default JudgesPanel;