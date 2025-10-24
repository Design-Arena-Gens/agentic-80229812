export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <h1 style={{
        fontSize: '4rem',
        margin: '0',
        fontWeight: 'bold'
      }}>
        Hello World! 👋
      </h1>
      <p style={{
        fontSize: '1.5rem',
        marginTop: '1rem',
        opacity: 0.9
      }}>
        Welcome to your Next.js app
      </p>
    </div>
  )
}
