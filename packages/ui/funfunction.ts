const x = process.env.TEST_ENV_VAR

console.log('funfunction init - ', x)

export function funfunction(where: string) {
  console.log(`${where} - `, x)
}
