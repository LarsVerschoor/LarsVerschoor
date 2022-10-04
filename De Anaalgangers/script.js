async function getData() {
  const id = '%232YVVVOQOG'

  const endpoint = new URL(`https://api.clashofclans.com/v1/clans/${id}/currentwar/leaguegroup`)

  endpoint.searchParams.set('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjMzZThiNGJjLTgyMmMtNDY3NS04ZDgwLTAzMWM1MGNiMzBjYiIsImlhdCI6MTY2NDkxNTIyOCwic3ViIjoiZGV2ZWxvcGVyL2E1NDRhYzMwLTJhYTctNTlmMS03NjYwLWRlNGUzN2Y3NTgzYyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEwMy4yMS4yNDQuMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.20Dse3oWSohx41zpSwcGE_fwSNApPC6rTzqg8UXh6lLaI5F3_va8E_BnlTYfPgkRc4_Xy_SWyYv4fsdng5q4WQ')

  console.log(endpoint.toString())

  const response = await fetch(endpoint, {
    headers: {
      Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjMzZThiNGJjLTgyMmMtNDY3NS04ZDgwLTAzMWM1MGNiMzBjYiIsImlhdCI6MTY2NDkxNTIyOCwic3ViIjoiZGV2ZWxvcGVyL2E1NDRhYzMwLTJhYTctNTlmMS03NjYwLWRlNGUzN2Y3NTgzYyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEwMy4yMS4yNDQuMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.20Dse3oWSohx41zpSwcGE_fwSNApPC6rTzqg8UXh6lLaI5F3_va8E_BnlTYfPgkRc4_Xy_SWyYv4fsdng5q4WQ"
    }
                               
  })

  console.log(response.json())
}

getData()
