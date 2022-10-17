import Loader from './Loader';
import Logo from './Logo';

export default function LoadingPage() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center">
          <Logo className="h-10 w-auto text-primary-9" />
          <span className="ml-1 text-3xl font-bold tracking-tight text-gray-12">chowder.</span>
        </div>

        <Loader className="h-8 w-8 text-gray-11" />
      </div>
    </div>
  );
}
