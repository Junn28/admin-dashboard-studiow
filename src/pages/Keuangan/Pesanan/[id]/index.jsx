import { useParams } from "react-router-dom";
import HeaderSection from "../../../../components/utils/headerSection";
import ModalConfirmation from "../../../../components/utils/modalConfirmation";
import data from "../data";
import iExport from "../../../../assets/export.svg";
import { useState } from "react";

export default function DetailPesanan() {
  const { id } = useParams();
  const dataPesanan = data[id];
  const [confirm, setConfirm] = useState(false);

  const openConfirm = () => {
    setConfirm(!confirm);
  };

  return (
    <div className="w-full">
      <div className="container mt-8">
        <div className="px-5 mb-5">
          <HeaderSection
            title={"Detail Pesanan"}
            btnName={"Export csv"}
            btnIcon={iExport}
            filter={false}
            search={false}
            btnAction={openConfirm}
          />
        </div>

        <div className="p-3">
          <div className="py-8 px-16 shadow-lg">
            <p className="text-base font-semibold">Nama Lengkap</p>
            <p className="mb-5">{dataPesanan.name}</p>

            <p className="text-base font-semibold">Nomor Telepon</p>
            <p className="mb-5">{dataPesanan.no_telp}</p>

            <p className="text-base font-semibold">Email</p>
            <p className="mb-5">{dataPesanan.email}</p>

            <p className="text-base font-semibold">Url Template</p>
            <p className="mb-5">{dataPesanan.url_template}</p>

            <p className="text-base font-semibold">Plan</p>
            <p className="mb-5">{dataPesanan.plan}</p>

            <p className="text-base font-semibold">Domain</p>
            <p className="badge-domain mb-5">{dataPesanan.domain}</p>

            <p className="text-base font-semibold">Billing Plan</p>
            <div className="mb-5">{dataPesanan.billing_plan}</div>

            <p className="text-base font-semibold">Billing Date</p>
            <p className="mb-5">{dataPesanan.billing_date}</p>

            <p className="text-base font-semibold">Description</p>
            <p className="mb-5">{dataPesanan.description}</p>

            <p className="text-base font-semibold">Bill Receipt</p>
            <div className="bill-receipt py-5 px-10 rounded-md">
              <img src="../../src/assets/receipt.png" alt="" />

              <div className="flex mt-3">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 37 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.6303 0.169067C33.5549 0.169067 28.1781 2.85747 18.4999 2.85747C9.00082 2.85747 3.26555 0.169067 2.36942 0.169067C1.47328 0.169067 0.577148 0.885976 0.577148 1.96134V27.0531C0.577148 28.1285 1.47328 28.8454 2.36942 28.8454C3.44478 28.8454 8.64237 26.157 18.4999 26.157C28.1781 26.157 33.5549 28.8454 34.6303 28.8454C35.5264 28.8454 36.4226 28.1285 36.4226 27.0531V1.96134C36.4226 0.885976 35.5264 0.169067 34.6303 0.169067ZM32.838 24.5439C29.2535 23.4686 24.5936 22.5725 18.4999 22.5725C12.4061 22.5725 7.74623 23.4686 4.16169 24.5439V4.47052C8.82159 5.72511 13.6607 6.44201 18.4999 6.44201C24.5936 6.44201 29.2535 5.54588 32.838 4.47052V24.5439ZM13.4815 12.715L6.8501 20.601C10.4346 20.0633 14.3776 19.884 18.4999 19.884C22.6221 19.884 26.5651 20.0633 30.1496 20.601L22.0844 10.9227L17.066 17.0164L13.4815 12.715Z"
                    fill="#5C5C5C"
                  />
                </svg>
                <p
                  style={{ color: "#5C5C5C" }}
                  className="text-xs font-medium ms-3"
                >
                  Receipt buy.jpg
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalConfirmation
        text={"Are you sure want to export this data ?"}
        open={confirm}
        send={openConfirm}
        csv={true}
      />
    </div>
  );
}
