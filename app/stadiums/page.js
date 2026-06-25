async function getStadiums() {
  const response = await fetch("http://localhost:3000/api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      {
        stadiums {
          id
          name
          club
          city
          capacity
          surface
          funFact
        }
      }
      `,
    }),
  });

  const { data } = await response.json();
  return data.stadiums;
}

export default async function StadiumsPage() {
  const stadiums = await getStadiums();
  
  
  return (
    <main className="flex-1 bg-gray-950 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-2 text-[#034694]">
        Away Day Explorer
      </h1>
      <p className="text-center text-gray-400 mb-8">
        Every Premier League ground Chelsea will vist in 2025/26
      </p>

      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {stadiums.map((stadium) => (
          <div
            key={stadium.id}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h2 className="text-xl font-bold">{stadium.name}</h2>
                <p className="text-blue-400 text-sm">{stadium.club}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-300">{stadium.city}</p>
                <p className="text-sm text-gray-400">
                  Capacity: {stadium.capacity.toLocaleString()}
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm italic">{stadium.funFact}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
