"use client";
import { QRCodeCanvas } from "qrcode.react";

const MyQr = () => {
  return (
    <div className="bg-white flex justify-center py-20" data-aos="zoom-in">
      <QRCodeCanvas value="https://www.goldfinchjewels.com/" size={200} />
    </div>
  );
};

export default MyQr;
