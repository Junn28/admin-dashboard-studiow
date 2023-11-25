export default function ModalDetail({ detailId, title, data, path, info }) {
  let detailPesanan = [
    {
      property: "Nama Pemesan",
      value: data.name,
    },
    {
      property: "Nama Project",
      value: data.project,
    },
    {
      property: "Kategori Project",
      value: data.category,
    },
    {
      property: "WhatsApp",
      value: data.whatsapp,
    },
    {
      property: "Project Referensi",
      value: data.reference,
    },
  ];

  let detailContact = [
    {
      property: "Nama",
      value: data.name,
    },
    {
      property: "WhatsApp",
      value: data.whatsapp,
    },
    {
      property: "Subjek",
      value: data.subject,
    },
  ];

  let detailMaintenance = [
    {
      property: "Nama Lengkap",
      value: data.name,
    },
    {
      property: "Nama Produk",
      value: data.product,
    },
    {
      property: "Subjek",
      value: data.subject,
    },
  ];

  let detailServer = [
    {
      property: "Nama",
      value: data.name,
    },
    {
      property: "Fitur",
      value: data.fitur,
    },
    {
      property: "Harga",
      value: data.price,
    },
    {
      property: "Jangka Waktu",
      value: data.time,
    },
    {
      property: "Status",
      value: data.status,
    },
    {
      property: "Nama Paket",
      value: data.packet,
    },
    {
      property: "Perusahaan",
      value: data.company,
    },
  ];

  const closeModal = () => {
    const elModalDetail = document.querySelectorAll(".modal-detail");

    elModalDetail.forEach((el, index) => {
      if (index === detailId) {
        el.classList.add("hidden");
      }
    });
  };
  return (
    <div id="myModal" className={`hidden modal-detail`}>
      <div className="detail-content text-start">
        <div className="flex justify-between mb-3">
          <p className="text-2xl font-medium">{title}</p>
          <span className="close text-lg px-2" onClick={closeModal}>
            &times;
          </span>
        </div>

        {path === "support/contact" || path === "service/server" ? (
          <hr className="mb-3" />
        ) : null}

        {path === "produk/custom-project" &&
          detailPesanan.map((item, index) => {
            return (
              <div className="flex mb-3" key={index}>
                <p className="w-[35%] font-semibold">{item.property}</p>
                <p className="font-medium">{item.value}</p>
              </div>
            );
          })}
        {path === "support/contact" &&
          detailContact.map((item, index) => {
            return (
              <div className="flex mb-3" key={index}>
                <p className="w-[35%] font-semibold">{item.property}</p>
                <p className="font-medium">{item.value}</p>
              </div>
            );
          })}
        {path === "service/maintenance" &&
          detailMaintenance.map((item, index) => {
            return (
              <div className="flex mb-3" key={index}>
                <p className="w-[35%] font-semibold">{item.property}</p>
                <p className="font-medium">{item.value}</p>
              </div>
            );
          })}
        {path === "service/server" &&
          detailServer.map((item, index) => {
            return (
              <div className="flex mb-3" key={index}>
                <p className="w-[35%] font-semibold">{item.property}</p>
                <p className="font-medium">{item.value}</p>
              </div>
            );
          })}

        <p className="font-semibold mb-3">{info}</p>
        <p className="font-medium">{data.infromation}</p>
        <p className="font-medium">{data.question}</p>

        <ul className="list-disc list-inside">
          {data.info_maintenance?.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
