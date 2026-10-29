import {expect} from 'chai'
import execa from 'execa'

describe('sequelize-tinker', () => {
  it('shows version', async () => {
    const {stdout} = await execa('./bin/run', ['--version'])
    expect(stdout).to.contain('sequelize-tinker/')
  })

  it('shows config as JSON', async () => {
    const {stdout} = await execa('./bin/run', ['config'])
    expect(JSON.parse(stdout)).to.be.an('object')
  })
})
