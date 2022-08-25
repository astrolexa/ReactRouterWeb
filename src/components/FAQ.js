import '../css/Faq.css';
function Faq() {
  return (
    <>
      <main>
        <div className="faqBg">
          <h2 className="titleFaq">FAQ</h2>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button fw-bold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Q1 : 請問悠遊卡可以刷高雄捷運嗎?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>全線(含輕軌)皆可使用悠遊卡。</strong> 捷運優惠：搭乘高雄捷運依票價圖之85折收費(社福卡再享半價優惠)。 輕軌優惠：持悠遊卡搭乘高雄輕軌第一階段全線(C1~C14)單一票價10元。
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed fw-bold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Q2 : 參加旅遊團，消費者如何分辨不實旅遊廣告?
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>消費者對於任何廣告都應抱持存疑的態度，最好也要查證，因為「廣告」有誇大的可能性。</strong> 

                旅行社的廣告，應載明公司名稱或服務標章、種類及註冊編號；而消費者絕不要有「便宜又大碗」的心態，因為在廣告單上雖列出令人心動的便宜團費，但到了當地景點時，另收參觀費、遊覽交通費等要「自費」才能活動的可能性非常大。

                挑選旅行社，最安全與保險的做法，就是親自到旅行社詢問旅遊行程細節，或打電話、上網查詢多家旅行社，經過詳細比較後再做參團決定。
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed fw-bold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Q3 : 如何判斷合法旅館或民宿?
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>為保護消費者，本府呼籲提醒消費者在選擇住宿場所前，可先上「台灣旅宿網」查詢合法及非法旅館名錄，確認所選擇之住宿場所是否合法登記，並可查詢旅館房價。</strong> 本市合法的旅宿業，皆有本局核發之「旅館業專用標識」及「合法旅館登記證」或「民宿專用標識」及「合法民宿登記證」(參考網站：交通部觀光局行政資訊網)。請消費者在住宿前先確認該營業場所是否有懸掛標識，以保障自身權益，切勿輕信「日租套房」等私人所架設之未合法招攬旅遊住宿之網頁廣告，並勿入住未取得登記證之旅宿業及日租屋。（相關訊息詢問電話：07-7995678轉1522~1529觀光產業科）
              </div>
            </div>
          </div>
    </div>
          </div>          
        </main>
      </>
    );
  }

export default Faq;