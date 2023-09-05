import { useParams } from 'react-router-dom';
import AddOrEditStudentComponent from '../../components/student/AddOrEditStudentComponent';

function AddStudent() {
  const { studentId } = useParams();
  return <AddOrEditStudentComponent studentId={studentId ?? null} />;
}

export default AddStudent;
