import Login from '@/components/Login';
import ProtectedRouteNoAuth from '@/components/ProtectedRouteNoAuth';

export const metadata = {
  title: 'Login | RG',
  description: 'Generated by create next app.',
};

export default function LoginPage(): JSX.Element {
  return (
    <>
      <ProtectedRouteNoAuth>
        <Login />
      </ProtectedRouteNoAuth>
    </>
  );
}
