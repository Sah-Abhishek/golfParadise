
import React, { useState, } from 'react';
import Sidebar from '../components/SideBar.jsx';
import SearchFilterBar from '../components/SearchFilterBar.jsx';
import Pagination from '../components/PaginationComponent.jsx';
import MembersTable from '../components/MembersTable.jsx';

import { members as allMembers } from '../Data/members.js';
import AddMemberModal from '../components/AddMemberModal.jsx';
import Header from '../components/Header.jsx';

const MembersDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('All Plans');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 5;
  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);


  const [members, setMembers] = useState(allMembers);
  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlan = selectedPlan === 'All Plans' || member.plan === selectedPlan;
    const matchesStatus = selectedStatus === 'All Status' || member.status === selectedStatus;

    return matchesSearch && matchesPlan && matchesStatus;
  });

  // Pagination logic
  const totalMembers = members.length; // Total members in database
  const totalPages = Math.ceil(totalMembers / membersPerPage);
  const startIndex = (currentPage - 1) * membersPerPage;
  const endIndex = startIndex + membersPerPage;
  const currentMembers = filteredMembers.slice(startIndex, endIndex);

  const handleAddMember = () => {
    setIsAddMemberModalOpen(true);
    console.log('Add member clicked');
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedPlan, selectedStatus]);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <AddMemberModal isOpen={isAddMemberModalOpen} onClose={() => setIsAddMemberModalOpen(false)}
        onSubmit={(newMember) => {

          setMembers(prev => [...prev, newMember]);
          console.log('New member added:', newMember);
          setIsAddMemberModalOpen(false);
        }}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onAddMember={handleAddMember} />

        <SearchFilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          onAddMember={handleAddMember}
        />

        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <MembersTable members={currentMembers} />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalMembers={totalMembers}
                membersPerPage={membersPerPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MembersDashboard;
