async function getData(url) {
  let request = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjkyM2EzMGI4LTVhM2EtNGZkNy1hYTllLWZmODViZTBlNDA0ZSIsImlhdCI6MTY2NDg4NzM5NSwic3ViIjoiZGV2ZWxvcGVyL2E1NDRhYzMwLTJhYTctNTlmMS03NjYwLWRlNGUzN2Y3NTgzYyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4OC4xMDEuNTYuOSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.rIbUUdc3GAJMgewul574BJ9U-3LHUhRmgOG7yv_El7vcNYtyaO88QPC-KJ8lCU7MVYRK4GG3cqK6awoTV88Viw'
    }
  })
  let response = await request.json()
  return response
}

console.log(getData("https://api.clashofclans.com/v1/clans/%232YVVVOQOG/currentwar/leaguegroup"))

