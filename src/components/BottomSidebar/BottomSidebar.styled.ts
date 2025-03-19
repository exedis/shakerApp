import styled from "@emotion/styled";

export const BottomSidebarWrapper = styled.div<{ progres?: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  transition: 0.5s ease;
  background: rgb(255, 0, 0);
  background: ${({ progres }) =>
    progres > 0
      ? `linear-gradient(90deg, rgba(255,0,0,1) ${progres}%, rgba(193,193,193,1) ${progres}%, rgba(193,193,193,1) 100%)`
      : "#475b7f"};
`;

export const BottomSidebarTrackData = styled.div`
  display: flex;
  gap: 10px;
`;

export const BottomSidebarArtistTitle = styled.div`
  font-size: 12px;
`;

export const BottomSidebarTrackTitle = styled.div``;

export const BottomSidebarControls = styled.div`
  display: flex;
  gap: 16px;
`;

export const BottomSidebarTrackCover = styled.img`
  border: 1px solid hsl(0deg 0% 0% / 60%);
`;
