-- AlterTable
ALTER TABLE "Certification" ADD COLUMN     "subtitleAr" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "titleAr" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "CompanyInfo" ADD COLUMN     "addressAr" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "hoursAr" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "taglineAr" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Partner" ADD COLUMN     "nameAr" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "clientAr" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "descriptionAr" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "durationAr" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "locationAr" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "longDescriptionAr" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "sectorAr" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "statusAr" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "titleAr" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "ProjectBlogContent" ADD COLUMN     "bodyAr" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "headingAr" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "ProjectHighlight" ADD COLUMN     "textAr" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "ProjectScope" ADD COLUMN     "titleAr" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "ProjectScopeDetail" ADD COLUMN     "textAr" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "ProjectService" ADD COLUMN     "nameAr" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "descriptionAr" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "longDescriptionAr" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "shortTitleAr" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "titleAr" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "ServiceFeature" ADD COLUMN     "textAr" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "ServiceFeatureGroup" ADD COLUMN     "titleAr" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "ServiceFeatureGroupDetail" ADD COLUMN     "textAr" TEXT NOT NULL DEFAULT '';
