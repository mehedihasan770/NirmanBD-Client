"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = ({ forceShow = false }) => {
    const pathname = usePathname()
    if (!forceShow && pathname === "/") {
        return null;
    }
  return (
    <footer className="bg-linear-to-r from-gray-900 to-gray-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">N</span>
              </div>
              <span className="text-xl font-bold">NirmanBD</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              আপনার বিশ্বস্ত নির্মাণ সামগ্রীর অংশীদার। গুণগত মান ও সাশ্রয়ী মূল্যের প্রতিশ্রুতি।
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <span className="text-lg">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <span className="text-lg">📱</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <span className="text-lg">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <span className="text-lg">📷</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">দ্রুত লিঙ্ক</h3>
            <ul className="space-y-2">
              {['হোম', 'প্রোডাক্ট', 'অর্ডার', 'কন্টাক্ট'].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center space-x-2">
                    <span className="text-orange-500">›</span>
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">পণ্যের তালিকা</h3>
            <ul className="space-y-2">
              {['রড', 'সিমেন্ট', 'ইট', 'বালু', 'খোয়া'].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center space-x-2">
                    <span className="text-orange-500">›</span>
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">যোগাযোগ</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-3">
                <span className="text-orange-400 mt-1">📍</span>
                <span>১২৩, বাড্ডা, ঢাকা-১২১২, বাংলাদেশ</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-orange-400">📞</span>
                <span>+৮৮০ ১৭xx-xxxxxx</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-orange-400">✉️</span>
                <span>info@nirmanbd.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-orange-400">🕒</span>
                <span>রবি-বৃহ: ৯টা - ৮টা</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© ২০২৪ NirmanBD. সর্বস্বত্ব সংরক্ষিত</p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <Link href="#" className="hover:text-orange-400 transition-colors">প্রাইভেসি পলিসি</Link>
              <Link href="#" className="hover:text-orange-400 transition-colors">টার্মস এন্ড কন্ডিশন</Link>
              <Link href="#" className="hover:text-orange-400 transition-colors">রিফান্ড পলিসি</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;