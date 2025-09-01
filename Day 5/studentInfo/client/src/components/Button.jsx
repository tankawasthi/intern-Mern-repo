import React from 'react';
import './Button.css'; // Optional styling file

/**
 * A reusable Button component that demonstrates React props
 * 
 * @param {Object} props - Component properties
 * @param {Function} props.onClick - Click handler function
 * @param {ReactNode} props.children - Button content
 * @param {string} props.type - Button type (button, submit, reset)
 * @param {string} props.variant - Button style variant (primary, secondary, success, danger)
 * @param {string} props.size - Button size (small, medium, large)
 * @param {boolean} props.disabled - Whether the button is disabled
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Inline styles
 * @param {boolean} props.outline - Whether to use outline style
 * @param {boolean} props.loading - Whether to show loading state
 */
const Button = ({ 
  onClick, 
  children, 
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
  style = {},
  outline = false,
  loading = false,
  ...restProps
}) => {
  // Generate CSS classes based on props
  const buttonClasses = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    outline ? 'btn-outline' : '',
    disabled ? 'btn-disabled' : '',
    loading ? 'btn-loading' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      style={style}
      {...restProps}
    >
      {loading && <span className="btn-spinner">⏳</span>}
      {children}
    </button>
  );
};

export default Button;