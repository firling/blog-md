import { Prism } from '@mantine/prism';

export default function code({className, ...props}) {
  const match = /language-(\w+)/.exec(className || '')
  return match
    ? <Prism language={match[1]} {...props} />
    : <code className={className} {...props} />
}