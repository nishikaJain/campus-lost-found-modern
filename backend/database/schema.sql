-- Campus Lost & Found Database Schema

CREATE DATABASE IF NOT EXISTS university_lost_found;
USE university_lost_found;

-- Items Table
CREATE TABLE IF NOT EXISTS items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    description TEXT,
    status ENUM('lost', 'found') NOT NULL,
    location VARCHAR(255) NOT NULL,
    contact_name VARCHAR(255) NOT NULL,
    contact_email VARCHAR(255),
    contact_phone VARCHAR(20) NOT NULL,
    image_url VARCHAR(500),
    is_claimed BOOLEAN DEFAULT FALSE,
    date_reported TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    claimed_date TIMESTAMP NULL,
    INDEX idx_status (status),
    INDEX idx_category (category),
    INDEX idx_is_claimed (is_claimed),
    INDEX idx_date_reported (date_reported)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Sample Data (Optional)
INSERT INTO items (item_name, category, description, status, location, contact_name, contact_email, contact_phone) VALUES
('phone charger', 'Electronics', 'samsung c', 'lost', 'lrc', 'John Doe', 'john@university.edu', '9876543210'),
('laptop charger', 'Electronics', 'it was black and c type', 'lost', 'IET block', 'Jane Smith', 'jane@university.edu', '9876543211'),
('Water Bottle of...', 'Accessories', 'it is black colour water bottle', 'found', 'LRC', 'Mike Johnson', 'mike@university.edu', '9876543212');
