import { IconError } from '../../components/export'

const ErrorPage = () => {
  return (
    <main className='page-error'>
      <section className='page-error-section'>
        <IconError className='page-error-svg' />
        <h2 className='page-error-heading'>404, página no encontrada</h2>
      </section>
    </main>
  )
}

export { ErrorPage }
