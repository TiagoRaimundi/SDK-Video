//Auth token we will use to generate a meeting and connect to it
export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI1NDlhNDI4NS1iYWFmLTRkYmQtYjRlZS1kZWM0Y2I3MzVmMWMiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY5NDQ1NTIxNCwiZXhwIjoxNjk1MDYwMDE0fQ.1RxRt3FVmL6hfHr2RBqY-tumTNE0vN6gpSvaqv9qD_A";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  const { roomId } = await res.json();
  return roomId;
};