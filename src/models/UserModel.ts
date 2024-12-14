export interface MyInfo {
    id: string
    username: string
    email: string
    profile: Profile
    enabled: boolean
    createdAt: string
    updatedAt: any
    roles: Role[]
  }

  export interface Profile {
    id: string
    firstName: string
    lastName: string
    dob: string
    gender: string
    phone: any
    avatar: any
    createdAt: string
    updatedAt: any
  }

  export interface Role {
    name: string
    description: any
    permissions: any[]
  }