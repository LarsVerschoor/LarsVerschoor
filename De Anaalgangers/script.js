async function getData() {
  const clanId = '%232YVVVOQOG'
  const endpoint = new URL(`https://api.clashofclans.com/v1/clans/${clanId}/currentwar/leaguegroup`)
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjEyOWM5OWE4LWVjMWUtNGFlNi1iYzNjLTI1ZDJhZTI0ZGUxZiIsImlhdCI6MTY2NDk1ODY2MCwic3ViIjoiZGV2ZWxvcGVyL2E1NDRhYzMwLTJhYTctNTlmMS03NjYwLWRlNGUzN2Y3NTgzYyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE3Mi42Ni40Ny42MyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.ea3GhQWKxwUCsvfvJQ0gUkpRNxtoj07j1UI7EJzjLwmxGNSpltPSzLNKF0I5zirHwnX1AFvWRFJu-l17va4WKA'

  const response = await fetch(endpoint, {
    headers: {
      'method': "GET",
      'Authorization': token
    }
  })
}

getData()
