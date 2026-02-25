"use client"

import React from 'react';
import Link from 'next/link';

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-r from-[#BABABA] dark:from-[#141414] to-[#F8F8F8] dark:to-[#3E3E3E] relative overflow-hidden flex items-center justify-center">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Signup Form */}
      <div className="relative z-10 w-full max-w-4/12 py-20 px-4">
        <div className="bg-white/90 dark:bg-black backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">

          {/* Form */}
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-2">
                FULL NAME
              </label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl transition-colors">
                  👤
                </span>
                <input
                  type="text"
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#9f28e3] focus:border-transparent outline-none transition-all duration-300 hover:border-[#9f28e3]"
                  placeholder="মোঃ রহিম মিয়া"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-2">
                EMAIL
              </label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl transition-colors">
                  ✉️
                </span>
                <input
                  type="email"
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#9f28e3] focus:border-transparent outline-none transition-all duration-300 hover:border-[#9f28e3]"
                  placeholder="rahim@nirmanbd.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-black dark:text-white  mb-2">
                PASSWORD
              </label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl transition-colors">
                  🔒
                </span>
                <input
                  type="password"
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#9f28e3] focus:border-transparent outline-none transition-all duration-300 hover:border-[#9f28e3]"
                  placeholder="********"
                />
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start space-x-3 pt-2">
              <input
                type="checkbox"
                id="terms"
                className="w-5 h-5 mt-1 text-orange-500 rounded border-gray-300 focus:ring-orange-500"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                আমি <Link href="/terms" className="text-orange-500 hover:underline">শর্তাবলী</Link> এবং{' '}
                <Link href="/privacy" className="text-orange-500 hover:underline">গোপনীয়তা নীতি</Link> পড়েছি এবং মেনে নিচ্ছি
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-linear-to-r from-[#9f28e3] to-[#9f28e3]/50 text-white py-4 rounded-xl font-bold text-lg transform hover:scale-[1.02] transition-all duration-300 shadow cursor-pointer"
            >
              সাইন আপ করুন
            </button>
          </form>

          {/* Social Signup */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-black text-gray-500">
                  অথবা সাইন আপ করুন
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { icon: 'G', bg: 'hover:bg-red-50', border: 'hover:border-red-200' },
                { icon: 'F', bg: 'hover:bg-blue-50', border: 'hover:border-blue-200' },
                { icon: 'T', bg: 'hover:bg-sky-50', border: 'hover:border-sky-200' }
              ].map((provider, index) => (
                <button
                  key={index}
                  className="py-3 rounded-xl border border-gray-200 hover:border-gray-300 bg-gray-50 hover:bg-gray-100 transition-all duration-300 font-medium text-gray-700"
                >
                  <span className="text-xl font-bold">{provider.icon}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;