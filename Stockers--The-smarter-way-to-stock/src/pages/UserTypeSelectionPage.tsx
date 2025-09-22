import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const UserTypeSelectionPage = () => {
  const navigate = useNavigate();

  const handleSelection = (userType: 'beginner' | 'intermediate') => {
    // Here, you would typically save the user type and navigate to the appropriate dashboard or section.
    // For now, we'll just log the selection and navigate to a placeholder route.
    console.log('User selected:', userType);
    navigate('/dashboard'); // This will be the new section you will integrate later
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md p-8 space-y-6 text-center bg-card rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">Select Your Level</h1>
        <p className="text-muted-foreground">Choose your experience level to get started.</p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => handleSelection('beginner')} className="w-full">
            Beginner
          </Button>
          <Button onClick={() => handleSelection('intermediate')} className="w-full">
            Intermediate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelectionPage;