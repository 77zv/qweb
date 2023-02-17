import { useState } from "react";
import { useSession } from "next-auth/react";
import { api } from "../utils/api";

const JudgesPanel = () => {

    const { data: event } = api.events.getEvent.useQuery();
    const [eventId, setEventId] = useState<string | undefined>(event?.id);

    return (
      <div>

      </div>
    );
};

export default JudgesPanel;