import { parseISO, format } from "date-fns";

type DateProps = {
  dateString: string
}

export default function Date({ dateString }: DateProps) {
  const date = parseISO(dateString);

  return (
    <time dateTime={dateString}>{ format(date, 'LLL d, yyyy') }</time>
  )
}

export function Year({ dateString }: DateProps) {
  const date = parseISO(dateString)
  
  return (
    <time dateTime={dateString}>{ format(date, 'yyyy') }</time>
  )
}

export function Full({ dateString }: DateProps) {
  const date = parseISO(dateString)
  
  return (
    <time dateTime={dateString}>{ format(date, 'MM/dd/yyyy') }</time>
  )
}