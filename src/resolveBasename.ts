import isIPFS from 'is-ipfs'

const resolveBasename = (path: string): string => {
  const segments = path.split('/')
  const [, second, third] = segments

  if (second === 'ipfs' && isIPFS.cid(third)) {
    return `/ipfs/${third}/`
  }

  if (second === 'ipns') {
    return `/ipns/${third}/`
  }

  return '/'
}

export default resolveBasename
