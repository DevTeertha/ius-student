import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { getOneStudent } from './studentService';
import { IExperience } from './interface/student.interface';

function StudentProfileComponent() {
  let { studentId } = useParams();
  const { data } = useQuery(['getOneStudent', studentId], () => getOneStudent(studentId));
  const student = data?.data;

  return (
    <div className='block md:grid md:grid-cols-3'>
      <div className='md:bg-gray-600 md:h-screen md:overflow-y-auto p-4'>
        <div>
          <div>
            <div className='w-[100px] h-[100px] mx-auto rounded-full overflow-hidden p-2 bg-gray-100'>
              <img className='w-full rounded-full' src={student?.imgUrl ?? '/default_avatar.webp'} />
            </div>
            <div className='text-dark-600 md:text-white mt-5'>
              <h4 className='text-2xl text-center font-semibold mb-5'>{student?.firstName + ' ' + student?.lastName}</h4>
              <hr />
              <div className='my-5'>
                <table className='text-sm'>
                  <tr>
                    <td className='font-semibold'># ID</td>
                    <td>:</td>
                    <td className='pl-3'>{student?.studentId ?? 'N/A'}</td>
                  </tr>
                  <tr>
                    <td className='font-semibold'>Type</td>
                    <td>:</td>
                    <td className='capitalize pl-3'>{student?.type ?? 'N/A'}</td>
                  </tr>
                  <tr>
                    <td className='font-semibold'>Gender</td>
                    <td>:</td>
                    <td className='capitalize pl-3'>{student?.gender ?? 'N/A'}</td>
                  </tr>
                  <tr>
                    <td className='font-semibold'>Date Of Birth</td>
                    <td>:</td>
                    <td className='pl-3'>{student?.dateOfBirth ?? 'N/A'}</td>
                  </tr>
                  <tr>
                    <td className='font-semibold'>Marital Status</td>
                    <td>:</td>
                    <td className='capitalize pl-3'>{student?.maritalStatus ?? 'N/A'}</td>
                  </tr>
                  <tr>
                    <td className='font-semibold'>Religion</td>
                    <td>:</td>
                    <td className='capitalize pl-3'>{student?.religion ?? 'N/A'}</td>
                  </tr>
                  <tr>
                    <td className='font-semibold'>Email</td>
                    <td>:</td>
                    <td className='pl-3'>{student?.email ?? 'N/A'}</td>
                  </tr>
                  <tr>
                    <td className='font-semibold'>Phone</td>
                    <td>:</td>
                    <td className='pl-3'>{student?.phone ?? 'N/A'}</td>
                  </tr>
                </table>
              </div>
              <hr />
              <div className='my-5'>
                <table className='text-sm'>
                  <tr>
                    <td className='font-semibold'>Father's Name</td>
                    <td>:</td>
                    <td className='capitalize pl-3'>{student?.fatherName ?? 'N/A'}</td>
                  </tr>
                  <tr>
                    <td className='font-semibold'>Father's Phone</td>
                    <td>:</td>
                    <td className='capitalize pl-3'>{student?.fatherPhone ?? 'N/A'}</td>
                  </tr>
                  <tr>
                    <td className='font-semibold'>Mother's Name</td>
                    <td>:</td>
                    <td className='capitalize pl-3'>{student?.motherName ?? 'N/A'}</td>
                  </tr>
                  <tr>
                    <td className='font-semibold'>Mother's Phone</td>
                    <td>:</td>
                    <td className='capitalize pl-3'>{student?.motherPhone ?? 'N/A'}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:col-span-2 md:overflow-y-auto md:h-screen'>
        <div className='p-4'>
          <div>
            <h2 className='font-bold text-2xl'>Address</h2>
            <hr />
            <div className='overflow-x-auto my-4'>
              <table className='table'>
                <tbody>
                  <tr>
                    <th>Present Address</th>
                    <td>{student?.presentAddress ?? 'N/A'}</td>
                  </tr>
                  <tr>
                    <th>Permanent Address</th>
                    <td>{student?.permanentAddress ?? 'N/A'}</td>
                  </tr>
                  <tr>
                    <th>Country</th>
                    <td>{student?.country ?? 'N/A'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className='font-bold text-2xl'>Education</h2>
            <hr />
            <div className='overflow-x-auto my-4'>
              <table className='table'>
                <tbody>
                  <tr>
                    <th>Department</th>
                    <td>{student?.education?.department ?? 'N/A'}</td>
                  </tr>
                  <tr>
                    <th>Degree</th>
                    <td>{student?.education?.degreeType ?? 'N/A'}</td>
                  </tr>
                  <tr>
                    <th>Credits</th>
                    <td>{student?.education?.credits ?? 'N/A'}</td>
                  </tr>
                  <tr>
                    <th>Batch</th>
                    <td>{student?.education?.batch ?? 'N/A'}</td>
                  </tr>
                  <tr>
                    <th>Session Year</th>
                    <td>{student?.education?.seassonYear ?? 'N/A'}</td>
                  </tr>
                  <tr>
                    <th>Graduation Year</th>
                    <td>{student?.education?.graduationYear ?? 'N/A'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className='font-bold text-2xl'>Experiences</h2>
            <hr />
            <div className='overflow-x-auto my-4'>
              <table className='table'>
                <thead>
                  <th className='text-bold text-gray-900'>Company Name</th>
                  <th className='text-bold text-gray-900'>Type</th>
                  <th className='text-bold text-gray-900'>Designation</th>
                  <th className='text-bold text-gray-900'>Address</th>
                  <th className='text-bold text-gray-900'>Start From</th>
                  <th className='text-bold text-gray-900'>End Date</th>
                </thead>
                <tbody>
                  {student?.experiences?.map((experience: IExperience, key: number) => {
                    return (
                      <tr key={'experience_' + student.studentId + '_' + key}>
                        <td>{experience?.companyName ?? 'N/A'}</td>
                        <td>{experience?.jobType ?? 'N/A'}</td>
                        <td>{experience?.designation ?? 'N/A'}</td>
                        <td>{experience?.address ?? 'N/A'}</td>
                        <td>{experience?.startFrom ?? 'N/A'}</td>
                        <td>{experience?.endFrom ?? 'N/A'}</td>
                      </tr>
                    );
                  })}
                  <tr></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfileComponent;
