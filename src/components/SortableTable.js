import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInstagramPages } from '../redux/instagramPagesSlice';
import { useEffect, useState } from 'react';
import './SortableTable.css';

const SortableTable = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.instagramPages);
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    dispatch(fetchInstagramPages());
  }, [dispatch]);

  const handleSort = (field) => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setSortField(field);
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortField) return 0;
    const order = sortOrder === 'asc' ? 1 : -1;
    return a[sortField] > b[sortField] ? order : -order;
  });

  if (loading) {
    return <Skeleton count={10} />;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="table-container">
      <table className="sortable-table">
        <thead>
          <tr>
            {['pageName', 'price', 'pageOwnerDetails', 'ownerEmail', 'contactNumber', 'vendorName', 'followers', 'ownershipType'].map(field => (
              <th key={field} onClick={() => handleSort(field)}>
                {field.charAt(0).toUpperCase() + field.slice(1)} {sortField === field ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((page) => (
            <tr key={page.id}>
              <td>{page.name || 'N/A'}</td>
              <td>{page.price || 'N/A'}</td>
              <td>{page.username || 'N/A'}</td>
              <td>{page.email || 'N/A'}</td>
              <td>{page.phone || 'N/A'}</td>
              <td>{page.company?.name || 'N/A'}</td>
              <td>{page.followers || 'N/A'}</td>
              <td>{page.ownershipType || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortableTable;
