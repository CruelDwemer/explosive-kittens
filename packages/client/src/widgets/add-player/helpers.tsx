export const mapUsersToOptions = (users: { login: string; id: number }[]) => {
  return users.map(item => ({
    label: item.login,
    value: item.id,
  }))
}
