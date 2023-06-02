import { generateUserId } from './users.utils'
import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUserId()
  user.id = id
  if (!user.password) {
    user.password = config.default_pass as string
  }
  const createdUser = await User.create(user)
  if (!createUser) {
    throw new Error('Failed to create User')
  }
  return createdUser
}

export default { createUser }
