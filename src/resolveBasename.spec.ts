import resolveBasename from './resolveBasename'

describe('Basename Resolver', () => {
  it('should return root given root', () => {
    expect(resolveBasename('/')).toBe('/')
  })

  it('should return root if no IPFS path elements', () => {
    expect(resolveBasename('/normal/route/1')).toBe('/')
  })

  it('should return the IPFS route if CID based route', () => {
    expect(
      resolveBasename(
        '/ipfs/QmPm8NcEnpjRHmJEciWUv1nV2tBgTb74zgDhkvcxWkjh21/another.html'
      )
    ).toBe('/ipfs/QmPm8NcEnpjRHmJEciWUv1nV2tBgTb74zgDhkvcxWkjh21/')
  })

  it('should return the IPNS route if IPNS route', () => {
    expect(resolveBasename('/ipns/dist.ipfs.io/nested/index.html')).toBe(
      '/ipns/dist.ipfs.io/'
    )
  })
})
