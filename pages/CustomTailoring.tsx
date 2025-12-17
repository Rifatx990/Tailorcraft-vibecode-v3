import React, { useState } from 'react';
import { Ruler, Upload, Calendar, CheckCircle } from 'lucide-react';
import { GeminiStylist } from '../components/GeminiStylist';

export const CustomTailoring: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    garmentType: 'Shirt',
    neck: '', chest: '', waist: '', shoulder: '', sleeve: '', length: '',
    deliveryDate: '',
    fabricSource: 'Shop',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Custom Tailoring Service</h1>
          <p className="mt-4 text-lg text-gray-500">Provide your measurements for a perfect fit, stitched by our expert tailors.</p>
        </div>

        {/* AI Stylist Component */}
        <GeminiStylist />

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-gray-100 h-2 w-full flex">
            <div className={`h-full ${step >= 1 ? 'bg-brand-500' : 'bg-transparent'} flex-1 transition-all duration-500`}></div>
            <div className={`h-full ${step >= 2 ? 'bg-brand-500' : 'bg-transparent'} flex-1 transition-all duration-500`}></div>
            <div className={`h-full ${step >= 3 ? 'bg-brand-500' : 'bg-transparent'} flex-1 transition-all duration-500`}></div>
          </div>

          <div className="p-8 md:p-12">
            {step === 1 && (
              <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-brand-100 text-brand-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                  Order Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Garment Type</label>
                    <select 
                      name="garmentType" 
                      value={formData.garmentType}
                      onChange={handleChange}
                      className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 p-3 border"
                    >
                      <option>Shirt</option>
                      <option>Panjabi</option>
                      <option>Trousers</option>
                      <option>Suit (2 Piece)</option>
                      <option>Safari Suit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Fabric Source</label>
                    <select 
                      name="fabricSource"
                      value={formData.fabricSource}
                      onChange={handleChange}
                      className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 p-3 border"
                    >
                      <option value="Shop">I will buy fabric from shop</option>
                      <option value="Own">I will provide my own fabric</option>
                    </select>
                  </div>
                </div>

                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Reference Image (Optional)</label>
                   <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-brand-400 transition cursor-pointer bg-gray-50">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-brand-600 hover:text-brand-500 focus-within:outline-none">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                      </div>
                    </div>
                </div>

                <div className="flex justify-end">
                  <button type="submit" className="bg-brand-600 text-white px-8 py-3 rounded-lg hover:bg-brand-700 font-medium transition">
                    Next Step
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-brand-100 text-brand-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                  Measurements (Inches)
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {['Neck', 'Chest', 'Waist', 'Shoulder', 'Sleeve', 'Length'].map((field) => (
                    <div key={field}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{field}</label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Ruler className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                          type="number"
                          name={field.toLowerCase()}
                          required
                          className="focus:ring-brand-500 focus:border-brand-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-3 border"
                          placeholder="0.00"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Delivery Date</label>
                        <div className="relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Calendar className="h-4 w-4 text-gray-400" />
                            </div>
                            <input 
                                type="date" 
                                name="deliveryDate" 
                                required
                                onChange={handleChange}
                                className="focus:ring-brand-500 focus:border-brand-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-3 border"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                        <textarea 
                            name="notes"
                            rows={1}
                            placeholder="e.g. Slim fit, extra pocket..."
                            onChange={handleChange}
                            className="focus:ring-brand-500 focus:border-brand-500 block w-full sm:text-sm border-gray-300 rounded-md p-3 border"
                        ></textarea>
                    </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button type="button" onClick={() => setStep(1)} className="text-gray-600 hover:text-gray-900 font-medium">
                    Back
                  </button>
                  <button type="submit" className="bg-brand-600 text-white px-8 py-3 rounded-lg hover:bg-brand-700 font-medium transition">
                    Submit Order
                  </button>
                </div>
              </form>
            )}

            {step === 3 && (
              <div className="text-center py-12">
                <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Received!</h2>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                  Your custom order ID is <strong>#ORD-2024-885</strong>. A tailor will review your measurements and contact you shortly for confirmation.
                </p>
                <div className="flex justify-center gap-4">
                  <button onClick={() => window.location.href = '#/'} className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition">
                    Return Home
                  </button>
                  <button onClick={() => window.location.href = '#/admin'} className="bg-brand-600 text-white px-6 py-2 rounded-lg hover:bg-brand-700 transition">
                    View Dashboard
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
