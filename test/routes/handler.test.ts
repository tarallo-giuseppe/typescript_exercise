import { RetriveData, GetUsers, AddUser, GetUser, PatchUser, DeleteUser } from "../../src/routes/users/handler"
import { getMockedRequest, getMockedResponse } from "../utils"
import { User } from "../../src/types"
import { UserModel } from "../../src/models"

test("handler test suite", () => {
  test("Retrive data test", () => {
    //TODO jest tests
  })

  test("Get Users test", async () => {
    let mockedRequest: any
    let mockedResponse: any
    const findMock = jest.fn()

    mockedRequest = getMockedRequest()
    mockedResponse = getMockedResponse()

    const expectedResult = findMock.mockResolvedValue((await UserModel.find()) as Array<User>)

    await GetUsers(mockedRequest, mockedResponse)

    expect(mockedResponse.send()).toBe(expectedResult)
  })

  test("Add User test", () => {
    //TODO jest tests
  })

  test("Get User test", () => {
    //TODO jest tests
  })

  test("Patch User test", () => {
    //TODO jest tests
  })

  test("Delete User test", () => {
    //TODO jest tests
  })
})
