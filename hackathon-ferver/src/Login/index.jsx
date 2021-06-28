import { LogForm } from './style';

export default function Login() {
  return (
    <LogForm>
      <div className='Login'>
        <div className='containers'>
          <div className='content'>
            <img
              src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/fiverr-2018.png'
              alt='logo'
            />
            <form>
              <label className='mail'> Email : </label>
              <input type='input' typeof='text' />
              <label className='password'> Password : </label>
              <input type='input' typeof='text' />
            </form>
          </div>
          <div className='button'>
            <p> Sign in </p>
            <input type='submit' value='Submit' className='buttonLogin' />
          </div>
        </div>
      </div>
    </LogForm>
  );
}
