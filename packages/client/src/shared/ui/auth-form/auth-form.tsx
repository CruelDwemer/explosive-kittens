import { AuthInputElement } from '../'
import { AuthButton } from '../'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Container, Typography, Box } from '@mui/material'
import styles from './styles'
import { InputData, AuthData } from '../../../entities/user/models'
import { joiResolver } from '@hookform/resolvers/joi'
import { useForm } from 'react-hook-form'
import Joi from 'joi'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../lib'

type Props = {
  id: string
  inputs: InputData[]
  pageName: string
  buttonText: string
  link: Record<string, string>
  schema: Joi.ObjectSchema<AuthData>
  onSubmitData: (data: AuthData, dispatch: AppDispatch) => void
}

const AuthForm: FC<Props> = ({
  inputs,
  pageName,
  id,
  buttonText,
  link,
  schema,
  onSubmitData,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<AuthData>({
    resolver: joiResolver(schema),
    mode: 'onBlur',
  })

  const dispatch = useDispatch()

  // проверка срабатывания dispatch в redux store
  // useEffect(() => {
  //   const checkStoreChange = () => {
  //     const change = store.getState()
  //     console.log('Хранилище Redux: ', change.user.userData)
  //   }
  //   store.subscribe(checkStoreChange)
  // }, [])
  //

  return (
    <Box
      component="form"
      id={id}
      sx={styles.form}
      onSubmit={handleSubmit((data: AuthData) => onSubmitData(data, dispatch))}>
      <Container disableGutters={true}>
        <Typography variant="h4" component="h1" sx={styles.title}>
          {pageName}
        </Typography>
        {inputs.map((element: InputData) => {
          const { id, name, type, label, selector } = element
          return (
            <AuthInputElement
              key={id}
              name={name as keyof AuthData}
              type={type}
              label={label}
              selector={selector}
              errors={errors}
              register={register}
              trigger={trigger}
            />
          )
        })}
      </Container>
      <Container disableGutters={true} sx={styles.bottomContainer}>
        <AuthButton text={buttonText} />
        <Link to={link.route}>
          <Typography sx={styles.link} color="primary">
            {link.text}
          </Typography>
        </Link>
      </Container>
      <div className="custom-error-container"></div>
    </Box>
  )
}

export default AuthForm
