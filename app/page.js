async function getFixtures() {
  const response = await fetch("http://localhost:3000/api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        {
          fixtures {
            id
            opponent
            date
            venue
            competition
          }
        }
      `,
    }),
  });

  const { data } = await response.json();
  return data.fixtures;
}

export default async function Home() {
  const fixtures = await getFixtures();

  return (
    <main className="flex-1 bg-gray-950 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-2 text-[#034694]">
        Chelsea Matchday Intelligence
      </h1>
      <p className="text-center text-gray-400 mb-8">
        2025/26 Premier League Fixtures
      </p>

      <div className="max-w-2xl mx-auto flex flex-col gap-4">
        {fixtures.map((fixture) => (
          <div
            key={fixture.id}
            className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex justify-between items-center"
          >
            <div>
              <p className="text-lg font-semibold">vs {fixture.opponent}</p>
              <p className="text-sm text-gray-400">{fixture.venue}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-blue-400">{fixture.date}</p>
              <p className="text-xs text-gray-500">{fixture.competition}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}