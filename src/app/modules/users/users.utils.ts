import { User } from './users.model'

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUser?.id
}
export const generateUserId = async () => {
  //   lastUserId++
  //   return String(lastUserId).padStart(0, 5)
  const lastId = (await findLastUserId()) || (0).toString().padStart(5, '0')
  return (parseInt(lastId) + 1).toString().padStart(5, '0')
}
