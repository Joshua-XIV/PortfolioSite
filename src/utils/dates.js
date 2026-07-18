const monthMap = {
  January: "Jan", February: "Feb", March: "Mar", April: "Apr",
  May: "May", June: "Jun", July: "Jul", August: "Aug",
  September: "Sep", October: "Oct", November: "Nov", December: "Dec"
}

export const abbreviateDate = (dateStr) => {
  let result = dateStr
  Object.entries(monthMap).forEach(([full, short]) => {
    result = result.replace(full, short)
  })
  return result
}