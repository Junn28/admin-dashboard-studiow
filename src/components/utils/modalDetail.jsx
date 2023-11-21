export default function ModalDetail({ detailId }) {
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
          <p className="text-2xl font-medium">Detail Pesanan</p>
          <span className="close text-lg px-2" onClick={closeModal}>
            &times;
          </span>
        </div>

        <div className="flex w-[50%] justify-between mb-3">
          <p className="font-semibold">Nama Pemesan</p>
          <p className="font-medium">Rahma Sari</p>
        </div>
        <div className="flex w-[50%] justify-between mb-3">
          <p className="font-semibold">Nama Project</p>
          <p className="font-medium">Rahma Sari</p>
        </div>
        <div className="flex w-[50%] justify-between mb-3">
          <p className="font-semibold">Kategori Project</p>
          <p className="font-medium">Rahma Sari</p>
        </div>
        <div className="flex w-[50%] justify-between mb-3">
          <p className="font-semibold">WhatsApp</p>
          <p className="font-medium">Rahma Sari</p>
        </div>
        <div className="flex w-[50%] justify-between mb-3">
          <p className="font-semibold">Project Referensi</p>
          <p className="font-medium">Rahma Sari</p>
        </div>

        <p className="font-semibold mb-3">Keterangan Custom Project</p>
        <p className="font-medium">
          Lorem ipsum dolor sit amet consectetur. Semper turpis id consequat ac
          sollicitudin. Tincidunt pharetra risus et pulvinar. Posuere praesent
          elementum ullamcorper duis. Lectus purus euismod quis molestie nisl
          tincidunt. Pretium egestas ut sit mauris non euismod sed. Nibh
          faucibus massa sodales pharetra sem adipiscing.
        </p>
      </div>
    </div>
  );
}
