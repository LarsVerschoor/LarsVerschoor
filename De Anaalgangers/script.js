async function getData() {
  const clanId = '%232YVVVOQOG'
  const endpoint = new URL(`https://api.clashofclans.com/v1/clans/${clanId}/currentwar/leaguegroup`)
  const token = 'here i have put my token'

  const response = await fetch(endpoint, {
    headers: {
      'method': "GET",
      'Authorization': token
    }
  })
}

getData()
