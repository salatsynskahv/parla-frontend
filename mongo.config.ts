const dataApiKey = 'YCTdRepCZQzGYFisNyXcopwZdFPUZ0vgDbxUXiTTVUmtLYnGlyg67BPDWC4z8F2n'
const url = 'https://eu-central-1.aws.data.mongodb-api.com/app/data-ycpnbfz/endpoint/data/v1'


export const Get_All = "https://eu-central-1.aws.data.mongodb-api.com/app/data-ycpnbfz/endpoint/data/v1/action/find";

export const Get_All_Body = {
  "dataSource": "Cluster1",
  "database": "Parla",
  "collection": "Dictionary",
  "filter": {}
}

export const Get_All_Headers = {
  "Content-Type": "application/json",
  "Access-Control-Request-Headers": "*",
  "Access-Control-Allow-Origin:": "*",
  "api-key": "YCTdRepCZQzGYFisNyXcopwZdFPUZ0vgDbxUXiTTVUmtLYnGlyg67BPDWC4z8F2n",
  "Accept": "application/json"
}
