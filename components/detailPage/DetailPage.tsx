import React from "react"

const DetailPage = ({ country }: any) => {
  return (
    <div>
      <p>{country[0].name.common}</p>
      <p>{country[0].name.official}</p>
    </div>
  )
}

export default DetailPage
