import React from 'react'
import renderer from 'react-test-renderer'

import IpfsRouter from './IpfsRouter'

describe('IpfsRouter', () => {
  describe('with single child element', () => {
    it('should render', () => {
      const component = renderer.create(
        <IpfsRouter>
          <p>hello world</p>
        </IpfsRouter>
      )

      const tree = component.toJSON()

      expect(tree).toMatchSnapshot()
    })
  })

  describe('with multiple child elements', () => {
    it('should render', () => {
      const component = renderer.create(
        <IpfsRouter>
          <p>hello</p>
          <p>world</p>
        </IpfsRouter>
      )

      const tree = component.toJSON()

      expect(tree).toMatchSnapshot()
    })
  })
})
