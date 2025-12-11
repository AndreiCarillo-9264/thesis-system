import React from 'react';

const BaseModal = ({ open, title, subtitle, children, onClose }) => {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <h4 id="modal-title" className="modal-title">
              {title}
            </h4>
            {subtitle && <p className="modal-subtitle">{subtitle}</p>}
          </div>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export const GenerateReportModal = ({
  open,
  onClose,
  onSubmit,
  defaultValues = {
    reportType: 'Sales Summary',
    startDate: '',
    endDate: '',
    format: 'PDF',
  },
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit();
  };

  return (
    <BaseModal
      open={open}
      onClose={onClose}
      title="Generate Sales Report"
      subtitle="Configure report parameters and generate sales analytics"
    >
      <form className="modal-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">
            Report Type *
            <select
              className="form-select"
              defaultValue={defaultValues.reportType}
              required
            >
              <option>Sales Summary</option>
              <option>Revenue Breakdown</option>
              <option>Customer Performance</option>
              <option>Order Status</option>
            </select>
          </label>
        </div>

        <div className="form-group">
          <label className="form-label">
            Start Date *
            <input
              type="date"
              className="form-control"
              placeholder="dd/mm/yyyy"
              defaultValue={defaultValues.startDate}
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label className="form-label">
            End Date *
            <input
              type="date"
              className="form-control"
              placeholder="dd/mm/yyyy"
              defaultValue={defaultValues.endDate}
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label className="form-label">
            Format *
            <select
              className="form-select"
              defaultValue={defaultValues.format}
              required
            >
              <option>PDF</option>
              <option>CSV</option>
              <option>XLSX</option>
            </select>
          </label>
        </div>

        <div className="modal-actions">
          <button type="button" className="btn btn-light" onClick={onClose}>
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}
          >
            Generate Report
          </button>
        </div>
      </form>
    </BaseModal>
  );
};

export const NewOrderModal = ({
  open,
  onClose,
  onSubmit,
  defaultValues = {
    customer: '',
    product: '',
    quantity: '',
    unitPrice: '',
    dueDate: '',
    salesRep: '',
    priority: 'High',
  },
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit();
  };

  return (
    <BaseModal
      open={open}
      onClose={onClose}
      title="Create New Sales Order"
      subtitle="Enter the details for the new sales order"
    >
      <form className="modal-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">
            Customer *
            <input
              type="text"
              className="form-control"
              placeholder="Enter customer name"
              defaultValue={defaultValues.customer}
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label className="form-label">
            Product *
            <input
              type="text"
              className="form-control"
              placeholder="Enter product name"
              defaultValue={defaultValues.product}
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label className="form-label">
            Quantity *
            <input
              type="number"
              className="form-control"
              placeholder="Enter quantity"
              defaultValue={defaultValues.quantity}
              required
              min="0"
            />
          </label>
        </div>

        <div className="form-group">
          <label className="form-label">
            Unit Price *
            <input
              type="number"
              className="form-control"
              placeholder="Enter unit price"
              defaultValue={defaultValues.unitPrice}
              required
              min="0"
              step="0.01"
            />
          </label>
        </div>

        <div className="form-group">
          <label className="form-label">
            Due Date *
            <input
              type="date"
              className="form-control"
              placeholder="dd/mm/yyyy"
              defaultValue={defaultValues.dueDate}
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label className="form-label">
            Sales Representative *
            <input
              type="text"
              className="form-control"
              placeholder="Enter sales rep name"
              defaultValue={defaultValues.salesRep}
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label className="form-label">
            Priority *
            <select
              className="form-select"
              defaultValue={defaultValues.priority}
              required
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </label>
        </div>

        <div className="modal-actions">
          <button type="button" className="btn btn-light" onClick={onClose}>
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}
          >
            Create Order
          </button>
        </div>
      </form>
    </BaseModal>
  );
};

// Example usage (pseudo):
// const [showReport, setShowReport] = useState(false);
// <GenerateReportModal open={showReport} onClose={() => setShowReport(false)} />;

