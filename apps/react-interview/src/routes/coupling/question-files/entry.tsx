/// <reference types="jest" />

import { DataSource } from "./data-source"

describe("User", ()=>{
  it("must get only needed data", async ()=>{
    const dataSource = new DataSource();
    const data = await dataSource.getUserData();

    expect(data).toStrictEqual({
      name: 'fake name',
      id: 'some-id'
    })
  })
})