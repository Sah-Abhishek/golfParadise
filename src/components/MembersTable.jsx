import MemberRow from "./MemberRow";

const MembersTable = ({ members }) => (
  <div className="overflow-hidden">
    <table className="w-full">
      <thead className="bg-gray-50">
        <tr>
          <th className="text-left py-3 px-6 font-medium text-gray-700 text-sm">Member</th>
          <th className="text-left py-3 px-6 font-medium text-gray-700 text-sm">Member ID</th>
          <th className="text-left py-3 px-6 font-medium text-gray-700 text-sm">Plan Type</th>
          <th className="text-left py-3 px-6 font-medium text-gray-700 text-sm">Status</th>
          <th className="text-left py-3 px-6 font-medium text-gray-700 text-sm">Join Date</th>
          <th className="text-left py-3 px-6 font-medium text-gray-700 text-sm">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {members.map((member, index) => (
          <MemberRow key={index} member={member} />
        ))}
      </tbody>
    </table>
  </div>
);

export default MembersTable;
